import { useRouter } from 'next/router'
import React, { useCallback } from 'react'

export default function GoBack() {

    const router = useRouter()

    const goBack = useCallback(
        () => {
            router.back()
        },
        [router],
    )

    return (
        <div
            onClick={() => goBack()}
        >
            <span
                style={{
                    backgroundColor: 'blue',
                    borderRadius: 15,
                    fontWeight: 'bold',
                    color: 'white',
                    padding: 10,

                }}
            >Voltar</span>
        </div>
    )
}


