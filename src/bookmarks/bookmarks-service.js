const BookmarksService = {
    getAllBookmarks(knex){
        return knex
        .select('*')
        .from('aip_bookmarks')
    },
    getBookmarksByUserId(knex, userId){
        return knex
        .select('*')
        .from('aip_bookmarks')
        .where('user_id',userId)
    },
    insertNewBookmark(knex, newBookmark){
        return knex
            .insert(newBookmark)
            .into('aip_bookmarks')
            .returning('*')
            .then(rows=>{
                return rows[0]
            })
    },
    getBookmarksByBookmarkId(knex, id){
        return knex 
            .from('aip_bookmarks')
            .select('*')
            .where('id',id)
            .first()
    },
    deleteBookmark(knex, id){
        return knex
            .from('aip_bookmarks')
            .where({id})
            .delete()
    },
    updateBookmark(knex, id, bookmarkFields){
        return knex('aip_bookmarks')
        .where({id})
        .update(bookmarkFields)
    }
}

module.exports = BookmarksService;