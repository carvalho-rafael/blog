import { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

export default function MyEditor() {
    const [editorState, setEditorState] = useState(
        () => EditorState.createEmpty(),
    );

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

    return <div>
        <BlockStyleControls
            editorState={editorState}
            onToggle={_toggleBlockType}
        />
        <Editor editorState={editorState} onChange={onChange} />
    </div>
}

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
        <span style={{display: 'inline-block', padding: '1rem', background: active ? '#d2d3d5': '#f2f3f4'}} onMouseDown={toggle}>
            {label}
        </span>

    )
}
