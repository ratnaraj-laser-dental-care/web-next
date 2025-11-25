import { useEffect, useRef, useState } from "react";

type APIState<T> = {
    data: T | null;
    loading: boolean;
    error: unknown | null;
};

type APIHandlers<T> = {
    setData: (data: T | null) => void;
    setError: (err: unknown | null) => void;
    setLoading: (v: boolean) => void;
    
};

export default function useAPIState<T = unknown>(
    initialData: T | null = null
): APIState<T> & APIHandlers<T> {
    const [data, setData] = useState<T | null>(initialData);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<unknown | null>(null);

    const mountedRef = useRef(true);
    useEffect(() => {
        mountedRef.current = true;
        return () => {
            mountedRef.current = false;
        };
    }, []);

    

    return {
        data,
        loading,
        error,
        setData: (d: T | null) => {
            if (!mountedRef.current) return;
            setData(d);
        },
        setError: (e: unknown | null) => {
            if (!mountedRef.current) return;
            setError(e);
        },
        setLoading: (v: boolean) => {
            if (!mountedRef.current) return;
            setLoading(v);
        },
    };
}