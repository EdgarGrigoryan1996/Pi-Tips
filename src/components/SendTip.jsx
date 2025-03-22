import { useState } from "react";
import { usePi } from "../hooks/usePi";

export default function SendTip() {
    const { sendTip } = usePi();
    const [recipient, setRecipient] = useState("");
    const [amount, setAmount] = useState(0.1);

    return (
        <div>
            <input type="text" placeholder="Pi Username" value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} />
            <button onClick={() => sendTip(recipient, amount)}>Отправить чаевые</button>
        </div>
    );
}
