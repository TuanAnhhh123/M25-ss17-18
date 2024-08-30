import Image from 'next/image';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Danh sách bài viết',
  description: 'Trang danh sách các bài viết.',
  keywords: 'blog, danh sách, bài viết, posts, next.js',
};

const posts = [
  { id: 1, title: "Accusamus beatae ad facilis", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e", width: 150, height: 150 },
  { id: 2, title: "Reprehenderit est deserunt", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e", width: 150, height: 150 },
  { id: 3, title: "Officia porro iure quia", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e", width: 150, height: 150 },
  { id: 4, title: "Qui eius qui autem sed", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e", width: 150, height: 150 },
  { id: 5, title: "Epuidae lusto deleniti", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e", width: 150, height: 150 },
  { id: 6, title: "Iusto sunt nobis quasi veritatis", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e", width: 600, height: 600 },
];

export default function PostsPage() {
  return (
    <div>
      <h1>Danh sách bài viết</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
        {posts.map((post) => (
          <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
            <Image
              src={post.thumbnailUrl}
              alt={post.title}
              width={post.width}
              height={post.height}
              layout="responsive"
            />
            <h2>{post.title}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}
