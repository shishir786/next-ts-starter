'use server';

import { IUser } from '@/types/user';
import dbConnect from '../db-connect';

import User from '@/models/user.model';
import { cache } from 'react';

// create a new user
export async function createUser(userData: IUser) {
  try {
    await dbConnect();
    const user = await User.findOne({ clerkUserId: userData.clerkUserId });

    if (user) return user;

    const newUser = new User(userData);
    return await newUser.save();
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
}

// update an existing user
export async function updateUser(clerkUserId: string, user: Partial<IUser>) {
  try {
    await dbConnect();
    return await User.findOneAndUpdate({ clerkUserId }, user, {
      new: true,
    });
  } catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
}

// delete an existing user
export async function deleteUser(clerkUserId: string) {
  try {
    await dbConnect();
    return await User.deleteOne({ clerkUserId });
  } catch (error) {
    console.error('Error deleting user:', error);
    throw error;
  }
}

// get a single user using clerk user id
export const getUser = cache(async (clerkUserId: string) => {
  try {
    await dbConnect();
    return await User.findOne({ clerkUserId });
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
});
