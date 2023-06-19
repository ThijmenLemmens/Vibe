'use server';

import { cookies } from 'next/headers'

async function createCookie(name, data) {

    let date = new Date();

    date.setDate(date.getDate() + 30);

    cookies().set({
        name: name,
        value: data,
        expires: date
    });
}

async function deleteCookie(cookieName) {
    cookies().delete(cookieName, null);
} 

function get() {

}

