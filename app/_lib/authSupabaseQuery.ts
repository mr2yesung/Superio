import { QueryResponse, supabaseServer } from "./supabase";
import { userType } from "./types/userType";

async function signInCredentials(
  email: string,
  password: string
): Promise<QueryResponse> {
  const { data, error } = await supabaseServer
    .from("credentials")
    .select("*")
    .eq("email", email)
    .single();

  if (error || !data)
    return {
      status: "error",
      code: 500,
      message: "Error fetching user credentials",
    };
  if (data.password !== password)
    return { status: "error", code: 401, message: "Invalid email or password" };

  return { status: "success", data };
}

async function signUpCredentials(
  email: string,
  password: string
): Promise<QueryResponse> {
  const { data, error } = await supabaseServer
    .from("credentials")
    .insert({ email, password })
    .select()
    .single();

  if (!data || error)
    return { status: "error", code: 500, message: "User not created" };

  return { status: "success", data };
}

async function getUserType(id: string): Promise<QueryResponse> {
  const { data, error } = await supabaseServer
    .from("users")
    .select("*")
    .eq("id", id)
    .single();

  if (error)
    return { status: "error", code: 500, message: "Error fetching user types" };
  if (!data.userType)
    return { status: "error", code: 404, message: "User type not found" };

  return { status: "success", data };
}

async function postUserType(
  id: string,
  userType: userType
): Promise<QueryResponse> {
  const { error } = await supabaseServer
    .from("users")
    .insert([{ id, userType }]);

  if (error)
    return { status: "error", code: 500, message: "Error adding user type" };

  return { status: "success", data: null };
}

export { signInCredentials, signUpCredentials, getUserType, postUserType };
