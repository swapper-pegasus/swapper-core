import React, { useState, useEffect } from 'react'
import { Modal, Input, Button } from '@swapper-org/swapper-elements'
import { decryptFromKeystore, Keystore } from '@xchainjs/xchain-crypto'

type Props = {
    getSecretPhrase: boolean,
    onGetSecretPhrase: (phrase: string) => void,
    keystore: Keystore,
    onClose: () => void,
}

export function ModalKeystorePassword ({ getSecretPhrase, onGetSecretPhrase, keystore, onClose }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [submitedPassword, setSubmitedPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState<undefined | string>()
  const [phrase, setPhrase] = useState<undefined | string>()

  useEffect(() => {
    setErrorPassword(undefined)
    setPhrase('')
    setPassword('')
    setSubmitedPassword('')
    setIsOpen(getSecretPhrase)
  }, [getSecretPhrase])

  useEffect(() => {
    async function decrypt () {
      try {
        const phraseDecrypted = await decryptFromKeystore(
          keystore as Keystore,
          submitedPassword
        )
        setPhrase(phraseDecrypted)
      } catch (e) {
        setErrorPassword('Incorrect password')
      }
    }

    if (submitedPassword !== '') {
      decrypt()
    }
  }, [keystore, submitedPassword])

  useEffect(() => {
    if (phrase) {
      onGetSecretPhrase(phrase)
      onClose()
    }
  }, [phrase, onGetSecretPhrase, onClose])

  return (
    <Modal isOpen={isOpen} onClose={() => {
      onClose()
    }}>
      <>
        <div>
          <Input
            placeholder="Password"
            label="Password"
            name="password"
            value={password}
            type="password"
            onChange={(value) => setPassword(value)}
            error={errorPassword}
          />
        </div>
        <div className="bg-white pt-1 text-right">
          <Button disabled={password.length === 0} dataTestId='password-continue-button' onClick={() => setSubmitedPassword(password)}>
            <span>Continuar</span>
          </Button>
        </div>
      </>
    </Modal>
  )
}
