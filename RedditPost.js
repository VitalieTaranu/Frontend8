import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

export default function RedditPost({ post, index, setPosts }) {
  function onClick() {
    setPosts((current) =>
      current.filter((currentPost, currentIndex) => {
        return currentIndex !== index;
      })
    );
  }

  return (
    <div>
      <Card
        sx={{
          width: "350px",
          margin: "20px",
          padding: "15px",
          backgroundColor: "#bb6"
        }}
      >
        {post.data.thumbnail.startsWith("http") ? (
          <CardMedia
            component="img"
            height="140"
            image={post.data.thumbnail}
            // alt={user.email}
          />
        ) : null}

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {post.data.title}
          </Typography>

          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ color: "#7f00FF", fontWeight: "bold" }}
          >
            {post.data.ups}
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small" onClick={onClick}>
            Remove
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
