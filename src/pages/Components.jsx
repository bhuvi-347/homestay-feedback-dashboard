import { useState } from 'react'
import { Button, Input, Modal, Toast, Loader } from '../components/ui'

function Components() {
  const [modalOpen, setModalOpen] = useState(false)
  const [toast, setToast] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
        Component Library
      </h1>

      {/* Buttons */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Button</h2>
        <div className="flex gap-4 flex-wrap">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="primary" size="sm">Small</Button>
          <Button variant="primary" size="lg">Large</Button>
          <Button variant="primary" disabled>Disabled</Button>
        </div>
      </section>

      {/* Input */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Input</h2>
        <div className="flex flex-col gap-4">
          <Input
            label="Guest Name"
            placeholder="Enter guest name"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Input
            label="Email"
            placeholder="Enter email"
            type="email"
            error="Invalid email address"
          />
        </div>
      </section>

      {/* Modal */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Modal</h2>
        <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          title="Sample Modal"
        >
          <p className="text-gray-600">This is a reusable modal component.</p>
        </Modal>
      </section>

      {/* Toast */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Toast</h2>
        <Button onClick={() => setToast(true)}>Show Toast</Button>
        {toast && (
          <Toast
            message="Analysis complete!"
            type="success"
            onClose={() => setToast(false)}
          />
        )}
      </section>

      {/* Loader */}
      <section className="max-w-3xl mx-auto bg-white rounded-xl shadow-md p-6 mb-6 border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Loader</h2>
        <div className="flex gap-6 items-center">
          <Loader size="sm" />
          <Loader size="md" />
          <Loader size="lg" />
        </div>
      </section>
    </div>
  )
}

export default Components
