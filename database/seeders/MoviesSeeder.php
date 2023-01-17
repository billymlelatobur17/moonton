<?php

namespace Database\Seeders;

use App\Models\Movies;
use Illuminate\Database\Seeder;

class MoviesSeeder extends Seeder
{
    public function run()
    {
        $movies = [
            [
                'name' => 'The Shawshank Redemption',
                'slug' => 'the-shawshank-redemption',
                'category' => 'Drama',
                'video_url' => 'https://www.youtube.com/embed/6hB3S9bIaco',
                'thumbnail' => 'https://i.ytimg.com/vi/6hB3S9bIaco/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => true,
            ],
            [
                'name' => 'The Godfather',
                'slug' => 'the-godfather',
                'category' => 'Crime',
                'video_url' => 'https://www.youtube.com/embed/sY1S34973zA',
                'thumbnail' => 'https://i.ytimg.com/vi/sY1S34973zA/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => true,
            ],
            [
                'name' => 'The Dark Knight',
                'slug' => 'the-dark-knight',
                'category' => 'Action',
                'video_url' => 'https://www.youtube.com/embed/EXeTwQWrcwY',
                'thumbnail' => 'https://i.ytimg.com/vi/EXeTwQWrcwY/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => false,
            ],
            [
                'name' => 'The Godfather: Part II',
                'slug' => 'the-godfather-part-ii',
                'category' => 'Crime',
                'video_url' => 'https://www.youtube.com/embed/qJr9QBCJ9gk',
                'thumbnail' => 'https://i.ytimg.com/vi/qJr9QBCJ9gk/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => false,
            ],
            [
                'name' => 'The Lord of the Rings: The Return of the King',
                'slug' => 'the-lord-of-the-rings-the-return-of-the-king',
                'category' => 'Adventure',
                'video_url' => 'https://www.youtube.com/embed/r5X-hFf6Bwo',
                'thumbnail' => 'https://i.ytimg.com/vi/r5X-hFf6Bwo/maxresdefault.jpg',
                'rating' => 4.5,
                'is_featured' => true,
            ],
        ];

        Movies::insert($movies);
    }
}
