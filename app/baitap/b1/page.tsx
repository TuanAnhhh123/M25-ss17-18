const posts = [
    { id: 1, title: "Accusamus beatae ad facilis", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e" },
    { id: 2, title: "Reprehenderit est deserunt", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e" },
    { id: 3, title: "Officia porro iure quia", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e" },
    { id: 4, title: "Qui eius qui autem sed", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e" },
    { id: 5, title: "Epuidae lusto deleniti", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e" },
    { id: 6, title: "Iusto sunt nobis quasi veritatis", thumbnailUrl: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lsz2c24cuksk7e" },
  ];
  export default function PostsPage() {
    return (
      <div>
        <h1>Danh sách bài viết</h1>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
          {posts.map((post) => (
            <div key={post.id} style={{ border: "1px solid #ccc", padding: "10px" }}>
              <img src={post.thumbnailUrl} alt={post.title} style={{ width: "150px", height: "150px" }} />
              <h2>{post.title}</h2>
            </div>
          ))}
        </div>
      </div>
    );
  }
  