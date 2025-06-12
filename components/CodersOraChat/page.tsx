
'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function CodersOraChat() {
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi! Ask me anything about Coders Ora.' },
  ])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleSend() {
    if (!input.trim()) return

    const newMessage = { role: 'user', text: input }
    setMessages((prev) => [...prev, newMessage])
    setLoading(true)
    setInput('')

    const res = await fetch('/api/codersora-chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: input }),
    })

    const data = await res.json()
    setMessages((prev) => [...prev, { role: 'bot', text: data.reply }])
    setLoading(false)
  }

  return (
    <div className="max-w-md mx-auto bg-white p-4 rounded shadow">
      <div className="h-80 overflow-y-auto space-y-2 mb-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-100 text-right' : 'bg-gray-100 text-left'}`}>
            {msg.text}
          </div>
        ))}
        {loading && <div className="text-sm text-gray-400">Typing...</div>}
      </div>
      <div className="flex gap-2">
        <input
          className="flex-1 border border-gray-300 px-2 py-1 rounded"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask about Coders Ora..."
        />
        <Button onClick={handleSend}>Send</Button>
      </div>
    </div>
  )
}
