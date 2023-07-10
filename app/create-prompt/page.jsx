'use client'
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';

import Form from '@components/Form';

const CreatePrompt = () => {
    const [submitting, setSubmitting] = useState(false);
    const [post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    const createPrompt = async (e) => {

    }
    return (
        <div>
            Create Prompt
        </div>
    )
}

export default CreatePrompt
