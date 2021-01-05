const BookmarksService = {
    getAllBookmarks(knex){
        return knex
        .select('*')
        .from('aip_bookmarks')
    },
}

module.exports = BookmarksService;