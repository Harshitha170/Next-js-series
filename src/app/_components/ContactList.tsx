import React from "react";
import { ContactType } from "../_types/contact";
import Link from "next/link";
import { FiEdit } from "react-icons/fi";

const ContactList = ({contacts} : {contacts: ContactType[] }) => {
    return (
    <div className="space-y-4">
        {contacts.map((contact) => (
        <div key={contact.id} className="p-4 border required-lg">
            <div className="flex justify-between items-start">
                <div>
                    <h2 className="text-lg font-semibold">{contact.name}</h2>
                    <p>{contact.email}</p>
                </div>
                <div className="flex items-center self-center gap-3">
                    <Link href={`/contact/edit/${contact.id}`} className="">
                    <FiEdit className = "text-blue-600" />Edit</Link>
            </div>
        </div>
    ))}
    </div>
    );
};

export default ContactList;