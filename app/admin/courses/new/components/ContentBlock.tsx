import React from 'react';

export interface ICourseContentBlock {
    title: string;
    type: 'heading' | 'regularText' | 'codeExample' | 'picture' | 'codeExcersise',
    content: []
}

interface Props {
    block: ICourseContentBlock
}



export const ContentBlock = ({ block }: Props) => {

    return (
        <div>
            ContentBlock
        </div>
    );
};
