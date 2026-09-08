"use server"
import { revalidatePath } from "next/cache";
import { createContact, deleteContact } from "../api/contact";
import { getSession } from "../_lib/session";
import { ContactType } from "../_types/contact";
import { redirect } from "next/navigation";

export const createContactAction = async (prevState:any, formData: FormData) => {
    if(!formData.get("name"))
{
    return {error: `Name is missing`}
}
const user = await getSession();
const newContact : ContactType = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    userId: user?.id,
};

try {
    await createContact(newContact);
    
} catch (error) {
    console.log("Error creating contact:", error);
    return {error: "Failed to create contact"};
    
}
revalidatePath("/contact");
    return ("/contact");
};


export const updateContactAction = async (prevState:any, formData: FormData) => {};




export const deleteContactAction = async (prevState:any, formData: FormData) => {
    const id = formData.get("id")as string;
    
    try {
        await deleteContact(id);
        revalidatePath("./contact");
        return  {success: true};
    } catch (error) {
        console.log("Error deleting contact: ",error);
        return {error: "Failed to delete contact"};
        
    }


}