'use client'
import { useEffect, useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/Page/TextLayer.css'
import 'react-pdf/dist/Page/AnnotationLayer.css'

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString()

export function PdfViewer({ name }: {name: string}) {
  const [numPages, setNumPages] = useState<number>();
  const [parentRef, setParentRef] = useState<HTMLDivElement | null>(null)
  const [containerWidth, setContainerWidth] = useState<number | undefined>(undefined)

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const updateWidth = () => {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        if (parentRef) {
          setContainerWidth(parentRef.clientWidth - 40)
        }
      }, 1000)
    }

    if (parentRef) {
      setContainerWidth(parentRef.clientWidth - 40)
    }

    const resizeObserver = new ResizeObserver(() => {
      updateWidth()
    })

    if (parentRef) {
      resizeObserver.observe(parentRef)
    }

    return () => {
      resizeObserver.disconnect()
      clearTimeout(timeoutId)
    }
  }, [parentRef])

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div ref={setParentRef} className=" bg-dark w-full p-5">
      <Document file={`/documents/${name}`} onLoadSuccess={onDocumentLoadSuccess}
        className="bg-dark"
      >
      {
        Array.from({ length: numPages }).map((_, index) =>
          <Page
            key={index}
            pageNumber={index + 1}
            width={containerWidth}
            className={`max-w-full ${index !== 0 ? 'mt-5' : ''}`}
          />
        )
      }
      </Document>
    </div>
  );
}
