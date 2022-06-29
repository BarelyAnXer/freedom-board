import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import parse from 'html-react-parser'

function Create () {

  const [formData, setFormData] = useState({
    title: '',
    dedicatedTo: '',
    author: '',
  })
  const [content, setContent] = useState('')

  const handleChange = (event) => {
    setFormData(prevState => {
      return {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    })
  }

  const createMessage = (event) => {
    event.preventDefault()
    console.log({ ...formData, content })

    // validations

    // if (false) {
    //
    // }

  }

  return (
    <Container style={{
      maxWidth: '50%',
    }}>
      <Form>
        <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Never Gonna Give You Up"
            name="title"
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="dedicatedTo">
          <Form.Label>Dedicated To</Form.Label>
          <Form.Control
            type="text"
            placeholder="Juan Dela Cruz"
            name="dedicatedTo"
            onChange={handleChange}
          />
        </Form.Group>

        <CKEditor
          editor={ClassicEditor}
          data={content}
          onChange={(event, editor) => {
            const data = editor.getData()
            setContent(data)
          }}
        />
        <div>{parse(content)}</div>

        <Form.Group className="mb-3" controlId="dedicatedTo">
          <Form.Label>Author (optional)</Form.Label>
          <Form.Control
            type="text"
            placeholder="Jose Rizal"
            name="author"
            onChange={handleChange}
          />
          <Form.Text className="text-muted">
            We'll never share who you are with anyone else.
          </Form.Text>
        </Form.Group>

        <Button variant="primary" type="button" onClick={createMessage}>
          Submit
        </Button>
      </Form>


    </Container>
  )
}

export default Create
