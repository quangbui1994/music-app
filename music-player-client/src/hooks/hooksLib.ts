import { useState, ChangeEvent, useEffect, useRef } from 'react';

export const useFormFields = (initialState: HookState): [HookState, (e: ChangeEvent<HTMLInputElement>) => void] => {
    const [fields, setFields] = useState(initialState);

    return [
        fields,
        function (event) {
            setFields({
                ...fields,
                [event.target.id]: event.target.value
            })
        }
    ]
}

export const useDidUpdateEffect = (fn: () => void, inputs: any) => {
    const didMountRef = useRef(false);
  
    useEffect(() => {
      if (didMountRef.current)
        fn();
      else
        didMountRef.current = true;
    }, inputs);
}
