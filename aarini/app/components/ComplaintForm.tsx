export default function ComplaintForm({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-ivory rounded-lg shadow-xl p-6 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">File a Complaint</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="type" className="block mb-1">
              Incident Type
            </label>
            <select id="type" className="w-full p-2 border rounded">
              <option>Harassment</option>
              <option>Broken Streetlight</option>
              <option>Suspicious Activity</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="description" className="block mb-1">
              Description
            </label>
            <textarea id="description" rows={4} className="w-full p-2 border rounded"></textarea>
          </div>
          <div className="flex justify-end space-x-2">
            <button type="button" onClick={onClose} className="px-4 py-2 border rounded">
              Cancel
            </button>
            <button type="submit" className="px-4 py-2 bg-forest-green text-ivory rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

