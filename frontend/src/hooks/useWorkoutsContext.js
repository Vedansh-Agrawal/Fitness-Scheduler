import { WorkoutsContext } from "../context/WorkoutCotext";
import { useContext } from "react";

export const useWorkoutsContext = () => {
    const context = useContext(WorkoutsContext)

    if (!context){
        throw Error('useworkoutsContext must be used inside a WorkoutsContextProvider')
    }

    return context
}