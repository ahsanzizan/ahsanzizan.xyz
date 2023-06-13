import '@toast-ui/editor/dist/toastui-editor.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Viewer } from '@toast-ui/react-editor';
import React from 'react';
import 'prismjs/themes/prism-coy.css';
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight-all.js';

export default React.forwardRef(function WysiwygViewer({ content, viewerRef }) {
    return (
        <Viewer ref={viewerRef} initialValue={content} plugins={[codeSyntaxHighlight]} />
    )
})
