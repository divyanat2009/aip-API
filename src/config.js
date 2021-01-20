module.exports = {
    PORT: process.env.PORT || 8000,
    NODE_ENV:process.env.NODE_ENV || 'development',
    DATABASE_URL: process.env.DATABASE_URL || 'postgres://ykqkrdvlmsxktt:1d29cddceea2d5079a90595c893b00ad5fcd6d8ed43c0855c29a84cebaf7481d@ec2-34-193-117-204.compute-1.amazonaws.com:5432/dp1g7eegdjct9?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',
    DB_URL:process.env.DB_URL|| 'postgresql://postgres@localhost/aip',
    TEST_DATABASE_URL: process.env.TEST_DATABASE_URL || 'postgresql://postgres@localhost/aip-test',
    API_TOKEN: process.env.API_TOKEN || 'myToken' 
}