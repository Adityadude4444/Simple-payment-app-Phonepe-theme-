import axios from 'axios';
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Sendmoney() {
    const [searchparams] = useSearchParams();
    const id = searchparams.get("id");  // Receiver's ID
    const name = searchparams.get("name");
    const [amount, setAmount] = useState(0);
    const [result, setResult] = useState("");

    return (
        <div className="flex justify-center h-screen bg-[#834da0]">
            <div className="h-full flex flex-col justify-center">
                <div className="border h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-[#cebce5] shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center">Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 rounded-full bg-[#834da0] flex items-center justify-center">
                                <span className="text-2xl text-white">A</span>
                            </div>
                            <h3 className="text-2xl font-semibold">{name}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                    htmlFor="amount"
                                >
                                    Amount (in Rs)
                                </label>
                                <input
                                    type="number"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                    id="amount"
                                    placeholder="Enter amount"
                                    onChange={e => setAmount(parseFloat(e.target.value))}
                                />
                            </div>
                            <button
                                onClick={async () => {
                                    try {
                                        const response = await axios.post("http://localhost:3000/api/v1/account/transfer", {
                                            to: id,  // Renamed from `id`
                                            amount
                                        },{
                                            headers: {
                                                Authorization: "Bearer " + localStorage.getItem("token")
                                            }});
                                        setResult(response.data.message);
                                    } catch (error) {
                                        console.error(error);
                                        setResult("Transfer failed");
                                    }
                                }}
                                className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-[#834da0] text-white"
                            >
                                Initiate Transfer
                            </button>
                        </div>
                    </div>
                    <div>{result}</div>
                </div>
            </div>
        </div>
    );
}
