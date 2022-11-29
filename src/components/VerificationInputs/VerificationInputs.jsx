import React, { useState, useRef, useEffect } from "react";
import styles from "./VerificationInput.module.scss";
import TextField from "@mui/material/TextField";
function VerificationInput({ length, label, loading, onComplete }) {
  const [code, setCode] = useState([...Array(length)].map(() => ""));
  const inputs = useRef([]);

  const processInput = (e, slot) => {
    const num = e.target.value;
    if (/[^0-9]/.test(num)) return;
    const newCode = [...code];
    newCode[slot] = num;
    setCode(newCode);
    if (slot !== length - 1) {
      inputs.current[slot + 1].focus();
    }
    if (newCode.every((num) => num !== "")) {
      inputs.current[newCode.length - 1].blur();
      onComplete(newCode.join(""));
    }
  };

  const onKeyUp = (e, slot) => {
    console.log(e.keyCode);
    if (e.keyCode === 8 && !code[slot] && slot !== 0) {
      const newCode = [...code];
      newCode[slot - 1] = "";
      setCode(newCode);
      inputs.current[slot - 1].focus();
    }
  };

  useEffect(() => {
    inputs.current[0].focus();
  }, []);

  return (
    <div className="code-input">
      <label
        className="code-label"
        style={{ textAlign: "right", display: "block" }}
      >
        {label}
      </label>
      <div className={styles.code_inputs}>
        {code.map((num, idx) => {
          return (
            <div key={idx} className={styles.input_wrapper}>
              <input
                type="text"
                value={num}
                onChange={(e) => processInput(e, idx)}
                onKeyUp={(e) => onKeyUp(e, idx)}
                ref={(ref) => inputs.current.push(ref)}
                autoFocus={idx === 0}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default VerificationInput;
