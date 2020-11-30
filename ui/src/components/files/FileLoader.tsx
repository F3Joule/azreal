import { EuiFilePicker, EuiFilePickerProps, EuiFormErrorText } from '@elastic/eui'
import React, { useState } from 'react'
import axios from 'axios'
import { createHasuraArray, mongoUrl } from '../utils'

type FilePicker = Omit<EuiFilePickerProps, 'onChange'> & {
  onChange: (fileIds?: string) => void
  fileIds?: string[]
}

const InnerFileLoader = ({ onChange, fileIds: initialFileIds, ...props}: FilePicker) => {
  const [ loading, setLoading ] = useState(false)
  const [ fileIds, setFileIds ] = useState(initialFileIds || [])
  const [ error, setError ] = useState<string>()

  return <><EuiFilePicker
    multiple
    compressed
    isLoading={loading}
    fullWidth
    display='large'
    onChange={
      async (files) => {
        try {
          setError(undefined)
          setLoading(true)
          deleteFiles(fileIds)
  
          const promisesFileHash = []
  
          for (const file of files) {
            promisesFileHash.push((saveFile(file)))
          }
  
          const ids = await Promise.all(promisesFileHash)

          console.log('ids', ids)
          
          onChange(createHasuraArray(ids))
          setFileIds(ids)
          setLoading(false)
        } catch (error) {
          console.error(error)
          setError(error?.toString())
          onChange()
        }
      }}
    {...props}
  />
  {error && <EuiFormErrorText>{error}</EuiFormErrorText>}
  </>
}


const saveFile = async (file: File) => {
  const form = new FormData()
  form.append('file', file)
  const { data } = await axios.post(`${mongoUrl}/add`, form)

  return data.id as string
}

const deleteFile = async (fileId: string) => {
  const { data } = await axios.delete(`${mongoUrl}/delete/${fileId}`)
  console.log(data.status)
}

export const deleteFiles = (ids?: string[]) => ids && ids.forEach(id => deleteFile(id))

export const DocumentLoader = ({ name, ...props }: FilePicker) => <InnerFileLoader
  accept='.pdf'
  initialPromptText="Виберіть або перетягніть файл"
  {...props}
/>

export const PhotoLoader = (props: FilePicker) => <InnerFileLoader
  name={name}
  accept='image/*'
  initialPromptText="Виберіть або перетягніть фото"
  {...props} />