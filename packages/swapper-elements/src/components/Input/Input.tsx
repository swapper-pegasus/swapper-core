import React from 'react'

type Props = {
  onChange: (value: string) => void;
  placeholder?: string;
  value?: string;
  name?: string,
  type?: string,
  label?: string,
  disabled?: boolean,
  error?: string,
};

export function Input ({
  onChange,
  placeholder,
  type = 'text',
  name = `${Date.now()}`,
  label,
  disabled,
  value = '',
  error
}: Props) {
  const styleLabel = 'font-normal text-swpGray text-sm pb-1'
  const styleInput = 'rounded border text-sm p-1 disabled:opacity-50 disabled:cursor-not-allowed'
  const styleError = 'text-red-500 text-sm pt-1'
  const styleHidden = 'invisible'
  return (
    <div className='flex flex-col'>
      {label && <label className={styleLabel} htmlFor={name}>{label}</label>}
      <input
        disabled={disabled}
        type={type}
        id={name}
        className={styleInput}
        onChange={event => onChange(event.target.value)}
        placeholder={placeholder}
        value={value}
      />
      {
        error ? <div className={styleError}>{error}</div> : <div className={`${styleError} ${styleHidden}`}>-</div>
      }
    </div>
  )
}
