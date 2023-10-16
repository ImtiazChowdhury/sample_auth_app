import asyncSleep from "../lib/asyncSleep";

export async function loginApi(payload){
    //fake API
    await asyncSleep(2000);
    return {
        username: "John Doe",
        email: "John@example.com",
        phone: "+8801324567890",
        address:{
            street: "426 ABC Test Street",
            city: "Dhaka",
            Country: "Bangladesh"
        },
        profileImage: null
    }
}