import { createClient } from "@supabase/supabase-js";

const supabaseServer = createClient(
  process.env.SUPABASE_URL ?? "",
  process.env.SUPABASE_SERVICE_KEY ?? ""
);

type QueryResponse =
  | {
      status: "success";
      data: any;
    }
  | {
      status: "error";
      code: number;
      message: string;
    };

export { supabaseServer, type QueryResponse };
