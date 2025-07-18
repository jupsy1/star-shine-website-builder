import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ygniaaxgdsyzjmhtfeos.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlnbmlhYXhnZHN5emptaHRmZW9zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4NTk0NDMsImV4cCI6MjA2ODQzNTQ0M30.qcxwytBT3wcSDkGSgc0Fn7mUE1wi7yeQT9V41So3k6U'

export const supabase = createClient(supabaseUrl, supabaseKey)
