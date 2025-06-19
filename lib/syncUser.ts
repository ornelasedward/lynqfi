import { supabase } from './supabase'

export async function syncUser(walletAddress: string) {
  const { data } = await supabase
    .from('users')
    .select('id')
    .eq('wallet_address', walletAddress)
    .single()

  if (!data) {
    const { error: insertError } = await supabase
      .from('users')
      .insert({ wallet_address: walletAddress })

    if (insertError) {
      console.error("Error inserting new user:", insertError)
      return
    }

    console.log("New user synced:", walletAddress)
  } else {
    console.log("User already exists:", walletAddress)
  }
}
