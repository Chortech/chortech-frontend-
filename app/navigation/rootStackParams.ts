import { ExpenseBalance } from "../models/other/axios/Expense";
import { Item } from "../models/other/axios/Item";
import { Token } from "../models/other/axios/Token";
import { FriendBalance } from "../models/responses/axios/user";
import { InputType } from "../utils/inputTypes";

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined;
  CodeVerification: {
    parentScreen: string;
    name: string;
    email: string;
    phone: string;
    password: string;
    inputType: InputType;
    token?: Token;
  };
  Profile: undefined;
  EditProfile: {
    name?: boolean;
    email?: boolean;
    phone?: boolean;
    password?: boolean;
  };
  ResetPassword: {
    email: string;
    phone: string;
    inputType: InputType;
    parentScreen: string;
  };
  CreditCardList: undefined;
  Friend: {
    id: string;
    name: string;
    image: string;
    balances: ExpenseBalance[];
  };
  Group: {
    id: string;
    groupName: string;
    ImageUrl: string;
  };
  Activity: {
    id: string;
    activityName: string;
    category: string;
    total: string;
  };
  AddExpense: {
    parentScreen: string;
    items: Array<Item>;
    id?: string;
    description?: string;
    total?: string;
  };
  AddComment: {
    expenseId?: string;
  };
};
