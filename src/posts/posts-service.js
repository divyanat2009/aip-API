const PostsService = {
    getAllPosts(knex){
        return knex
        .from('aip_posts')
        .select('aip_posts.id as post_id','post_type', 'content','title','by','link','aip_posts.date_created','user_id', 'aip_users.username','aip_posts.image_path')
        .orderBy('aip_posts.date_created','desc')
        .join('aip_users','aip_posts.user_id', 'aip_users.id')
        
    },

    getPostsByUserId(knex, userId){
        console.log(userId)
        return knex
        .from('aip_posts')
        .select('aip_posts.id as post_id','post_type', 'content','title','by','link','aip_posts.date_created','user_id', 'aip_users.username','aip_posts.image_path')
        .orderBy('aip_posts.date_created','desc')
        .join('aip_users','aip_posts.user_id', 'aip_users.id' )
        .where('aip_posts.user_id',userId)
    },
    getConnectionPosts(knex, userconnection){
        return knex
        .from('aip_posts')
        .select('aip_posts.id as post_id','post_type', 'followee_id as user_id', 'content','title','by','link','aip_posts.date_created', 'username', 'aip_posts.image_path')
        .orderBy('aip_posts.date_created','desc')
        .join('aip_users','aip_posts.user_id', 'aip_users.id')
        .join('aip_connections','aip_connections.followee_id', 'aip_users.id')
        .where('aip_connections.user_id',userconnection)
       
    },
    getBookmarkPosts(knex, userbookmark){
        return knex
        .from('aip_posts')
        .select('aip_posts.id as post_id','post_type', 'aip_bookmarks.user_id as user_id', 'aip_posts.content as content','aip_bookmarks.content as bookmark_content','title','by','link','aip_posts.date_created','aip_bookmarks.id as bookmark_id','aip_posts.image_path')
        .orderBy('aip_posts.date_created','desc')
        .join('aip_bookmarks','aip_bookmarks.post_id', 'aip_posts.id')
        .where('aip_bookmarks.user_id',userbookmark)
       
    },
    insertNewPost(knex, newPost){
        return knex
            .insert(newPost)
            .into('aip_posts')
            .returning('*')
            .then(rows=>{
                return rows[0]
            })
    },
    getPostByPostId(knex, id){
        return knex 
            .from('aip_posts')
            .select('*')
            .where('id',id)
            .first()
    },
    deletePost(knex, id){
        return knex
            .from('aip_posts')
            .where({id})
            .delete()
    }
}

module.exports = PostsService