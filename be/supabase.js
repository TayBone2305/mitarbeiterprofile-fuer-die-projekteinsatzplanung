import * as dotenv from 'dotenv';
dotenv.config();
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fkmnksfvvgmmdfbszsfo.supabase.co';
const supabaseKey = process.env.SUPABASE_KEY || '';
const supabaseClient = createClient(supabaseUrl, supabaseKey);

export default supabaseClient;
