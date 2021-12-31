import React, { useState, useEffect } from 'react'
import { Modal, Input } from '@swapper-org/swapper-elements'
import { decryptFromKeystore, Keystore } from '@xchainjs/xchain-crypto'

type Props = {
    getSecretPhrase: boolean,
    onGetSecretPhrase: (phrase: string) => void,
    keystore: Keystore
}

export function ModalKeystorePassword ({ getSecretPhrase, onGetSecretPhrase, keystore }: Props) {
  const [isOpen, setIsOpen] = useState(false)
  const [password, setPassword] = useState('')
  const [submitedPassword, setSubmitedPassword] = useState('')
  const [errorPassword, setErrorPassword] = useState<undefined | string>()
  const [phrase, setPhrase] = useState<undefined | string>()

  useEffect(() => {
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
      setPhrase('')
      setPassword('')
      setSubmitedPassword('')
      setErrorPassword(undefined)
      setIsOpen(false)
    }
  }, [phrase, onGetSecretPhrase])

  return (
    <Modal isOpen={isOpen} onClose={() => setSubmitedPassword(password)}>
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
    </Modal>
  )
}
