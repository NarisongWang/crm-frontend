import React from 'react'
import { Breadcrumb } from 'react-bootstrap'

export const PageBreadcrumb = ({page}) => {
  return (
    <Breadcrumb>
        <Breadcrumb.Item href="/dashboard">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>{page}</Breadcrumb.Item>
    </Breadcrumb>
  )
}
