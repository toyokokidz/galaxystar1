import { supabase } from '../../../lib/supabase'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  try {
    const { email, password } = req.body

    console.log('Login attempt:', { email }) 

    const { data: user, error } = await supabase
      .from('users')
      .select('*')
      .eq('email', email)
      .eq('password', password)
      .single()

    console.log('Supabase response:', { user, error }) 

    if (!user) {
      return res.status(401).json({ 
        error: 'User not found. Please check your email or register a new account.' 
      })
    }

    if (error) {
      console.error('Supabase error:', error)
      return res.status(500).json({ 
        error: 'Database error' 
      })
    }

    res.status(200).json({ 
      user: {
        id: user.id,
        name: user.name,
        email: user.email
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    res.status(500).json({ error: 'Error during login' })
  }
} 