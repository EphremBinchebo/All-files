import React, { useEffect, useState } from 'react'
import { listPayments } from '../services/api'

export default function PaymentsPage(){
  const [payments, setPayments] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(()=>{ listPayments().then(setPayments).catch(()=>setPayments([])).finally(()=>setLoading(false)) }, [])

  return (
    <div style={{padding:20}}>
      <h2>Payments</h2>
      {loading && <div>Loading...</div>}
      <table style={{width:'100%',borderCollapse:'collapse'}}>
        <thead><tr><th>Customer</th><th>Amount</th><th>Status</th><th>Date</th></tr></thead>
        <tbody>
          {payments.map(p=>(
            <tr key={p.id}><td>{p.customer||p.email||'—'}</td><td>${p.amount}</td><td>{p.status}</td><td>{new Date(p.date).toLocaleString()}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
