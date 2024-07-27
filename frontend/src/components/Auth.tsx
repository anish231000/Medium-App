import { SignupInput } from "@anish2310/medium-common"
import axios from "axios"
import { ChangeEvent, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { BACKEND_URL } from "../config"

export const Auth = ({ type }: { type: "signup" | "signin" }) => {

    const navigate = useNavigate();
    const [postInputs, setPostInputs] = useState<SignupInput>({
        name: "",
        username: "",
        password: ""
    })

    async function sendRequest() {
        try{
            console.log("abc");
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/${type === "signup" ? "signup" : "signin"}`,postInputs);
            console.log("xyz");
            const jwt = response.data;
            localStorage.setItem("token",jwt);
            navigate("/blogs");
        } catch(e) {
            alert("hi");
        }
    }

    return (
        <div className="h-screen flex justify-center flex-col">
            <div className="flex justify-center">
                <div>
                    <div className="px-10">
                        <div className="text-3xl font-extrabold">
                            Create an Account
                        </div>
                        <div className="text-slate-400">
                            {type === "signin" ? "Don't have an Account?" :"Already have an Account?"}
                            <Link className="pl-2 underline" to={type==="signin"? "/signup" : "/signin"}>
                                {type==="signin" ? "Sign Up" : "Sign In"}
                            </Link>
                        </div>
                    </div>
                    <div className="pt-8">
                        {type === "signup" ? <LablledInput label="Name" placeholder="Anish V..." onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                name: e.target.value
                            }))
                        }} /> : null }
                        <LablledInput label="Username" placeholder="abc@email.com" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                username: e.target.value
                            }))
                        }} />
                        <LablledInput label="Password" type={"password"} placeholder="1234" onChange={(e) => {
                            setPostInputs(c => ({
                                ...c,
                                password: e.target.value
                            }))
                        }} />
                        
                        <button onClick={sendRequest} type="button" className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">{type === "signup" ? "Sign Up" : "Sign In"}</button>

                    </div>

                </div>
            </div>
        </div>
    )
}

interface LablledInputType {
    label: string,
    placeholder: string,
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    type?: string
}

function LablledInput({ label, placeholder, onChange, type }: LablledInputType) {
    return <div>
        <div>
            <label className="block mb-2 text-sm font-semibold text-gray-900 dark:text-black pt-3">{label}</label>
            <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder={placeholder} required />
        </div>
    </div>
}