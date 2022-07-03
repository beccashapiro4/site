
export class BlogEntry {
    constructor(
        author,
        content,
        cover_img,
        date,
        subtitle,
        timestamp,
        title
    ) {
        this.author = author;
        this.content = content;
        this.cover_img = cover_img;
        this.date = date;
        this.subtitle = subtitle;
        this.timestamp = timestamp;
        this.title = title;
    }
    toString() {
        return this.author
            + ', '
            + this.content
            + ', '
            + this.cover_img
            + ', '
            + this.date
            + ', '
            + this.subtitle
            + ', '
            + this.timestamp
            + ', '
            + this.title
    }
}

// Firestore data converter
export const blogConverter = {
    toFirestore: (blog) => {
        return {
            author: blog.author,
            content: blog.content,
            cover_img: blog.cover_img,
            date: blog.date,
            subtitle: blog.subtitle,
            timestamp: blog.timestamp,
            title: blog.title
        };
    },
    fromFirestore: (snapshot, options) => {
        const data = snapshot.data(options);
        return new BlogEntry(
            data.author,
            data.content,
            data.cover_img,
            data.date,
            data.subtitle,
            data.timestamp,
            data.title
        );
    }
};