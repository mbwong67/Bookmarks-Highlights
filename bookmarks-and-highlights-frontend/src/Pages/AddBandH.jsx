import React from "react";
import { useLocation } from "react-router-dom";

import { addOrUpdateFormReducer } from "../Reducers";
import BodyForAddOrUpdate from "../Components/BodyForAddOrUpdate";
import TopForAddOrUpdate from "../Components/TopForAddOrUpdate";

// this one is very similar to /UpdateBandH so I might simplify this code or put them together once I've worked out the API 
const AddBandH = () => {
    const location = useLocation();
    const { userid, userinfo } = location.state

    const [ formValidity, setformValidity ] = React.useState(false)
    const checkFormValidity = (stateOfForm) => {
        setformValidity(() => stateOfForm.isValid)
    }

    // this function establishes the inputs and their validity status
    const [stateOfForm, dispatch] = React.useReducer(addOrUpdateFormReducer, {
        inputs: {
            title: { value: "", isValid: false },
            date: { value: "", isValid: false },
            page: { value: "", isValid: false },
            tags: { value: "", isValid: false }
        },
        isValid: false
    })

    return (
        <div className="flex flex-wrap items-center justify-center w-full h-screen h- mx-auto bg-var-2 shadow-card relative">
            <TopForAddOrUpdate type="submit" form="add-or-update-form" userid={userid} isAddOrUpdateBtnAbled={formValidity} isUpdating={false} isAddButton={true} route={"/" + userid + "/myprofile"}/>
            <BodyForAddOrUpdate userid={userid} isFormValid={checkFormValidity} initialFormValidity={false} isAdd={true} />
        </div>
    )
}

export default AddBandH;