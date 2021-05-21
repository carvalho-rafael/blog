import { ForwardRefRenderFunction, useEffect, useState } from 'react';
import { ContentState, convertFromHTML, convertFromRaw, convertToRaw, Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';
import React from 'react';

type MyEditorProps = {
    data: string
}

const MyEditor: ForwardRefRenderFunction<Editor, MyEditorProps> = ({ data }, ref) => {
    const [editorState, setEditorState] = useState(
        () => {
            return data ?
                EditorState.createWithContent(ContentState.createFromText(data))
                : EditorState.createEmpty()
        }
    );

    useEffect(() => {
        data &&
            setEditorState(EditorState.createWithContent((convertFromRaw(JSON.parse(data)))))
    }, [data])

    const onChange = (newState) => setEditorState(newState);

    function _toggleBlockType(blockType) {
        onChange(
            RichUtils.toggleBlockType(
                editorState,
                blockType
            )
        );
    }

    const BlockStyleControls = (props) => {
        const { editorState } = props;
        const selection = editorState.getSelection();
        const blockType = editorState
            .getCurrentContent()
            .getBlockForKey(selection.getStartKey())
            .getType();

        return (
            <div className="RichEditor-controls">
                {BLOCK_TYPES.map((type) =>
                    <StyleButton
                        key={type.label}
                        active={type.style === blockType}
                        label={type.label}
                        onToggle={props.onToggle}
                        style={type.style}
                    />
                )}
            </div>
        );
    };

    return (
        <div>
            <BlockStyleControls
                editorState={editorState}
                onToggle={_toggleBlockType}
            />
            <Editor ref={ref} editorState={editorState} onChange={onChange} />
        </div>
    )
}

export default React.forwardRef(MyEditor);

const BLOCK_TYPES = [
    { label: 'H1', style: 'header-one' },
    { label: 'H2', style: 'header-two' },
    { label: 'H3', style: 'header-three' },
    { label: 'H4', style: 'header-four' },
    { label: 'H5', style: 'header-five' },
    { label: 'H6', style: 'header-six' },
    { label: 'Blockquote', style: 'blockquote' },
    { label: 'UL', style: 'unordered-list-item' },
    { label: 'OL', style: 'ordered-list-item' },
    { label: 'Code Block', style: 'code-block' },
];

const StyleButton = ({ onToggle, active, label, style }) => {

    const toggle = (e) => {
        e.preventDefault();
        onToggle(style);
    };

    return (
        <span style={{ display: 'inline-block', padding: '1rem', background: active ? '#d2d3d5' : '#f2f3f4' }} onMouseDown={toggle}>
            {label}
        </span>

    )
}
