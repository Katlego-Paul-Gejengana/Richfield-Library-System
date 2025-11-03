const { Book, User, Notification } = require('../models');

// Add a new book
exports.addBook = async (req, res) => {
    try {
        const { title, author, isbn, copies } = req.body;
        const book = await Book.create({ title, author, isbn, copies });

        // Notify all students
        const students = await User.findAll({ where: { role: 'Student' } });
        for (const student of students) {
            await Notification.create({
                userId: student.id,
                message: `A new book "${title}" has been added to the library.`,
                sentDate: new Date()
            });
        }

        res.status(201).json({ success: true, data: book });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to add book' });
    }
};

// Delete a book
exports.deleteBook = async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        if (!book) return res.status(404).json({ error: 'Book not found' });

        await book.destroy();

        // Notify all students
        const students = await User.findAll({ where: { role: 'Student' } });
        for (const student of students) {
            await Notification.create({
                userId: student.id,
                message: `The book "${book.title}" has been removed from the library.`,
                sentDate: new Date()
            });
        }

        res.json({ success: true, message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete book' });
    }
};
