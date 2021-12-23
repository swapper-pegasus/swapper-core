import React from 'react'

type Props = {
  onClick: () => void;
  children?: JSX.Element | string;
  disabled?: boolean,
  withGradient?: boolean,
  dataTestId?: string,
  type?: string,
};

export function Button ({
  onClick,
  children,
  disabled,
  withGradient,
  dataTestId,
  type
}: Props) {
  const style = 'disabled:cursor-not-allowed disabled:opacity-20 bg-primary rounded-full hover:bg-primary-dark text-white text-sm px-8 py-2'
  const styleGradient = 'bg-gradient-to-r from-primary-darkest to-primary-lightest hover:bg-blue-500'
  const styleButtonLink = 'text-primary underline'

  const finalStyle = () => {
    if (type === 'link') {
      return styleButtonLink
    }
    return withGradient ? `${style} ${styleGradient}` : style
  }

  return (
      <button
        className={finalStyle()}
        onClick={onClick}
        disabled={disabled}
        data-testid={dataTestId}
      >
        {children}
      </button>
  )
}
