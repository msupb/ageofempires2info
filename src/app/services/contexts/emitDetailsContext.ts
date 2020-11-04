import { createContext } from 'react';

interface IEmitDetailsContext {
    clickMethod: (arg?: any) => void;
}

const EmitDetailsContext = createContext<IEmitDetailsContext | null>(null);

export default EmitDetailsContext;