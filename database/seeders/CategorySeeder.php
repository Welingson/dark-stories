<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $categories = [
            'Fantasmas',
            'Aparições',
            'Possessões',
            'Entidades',
            'Sombras',
            'Alienígenas',
            'Óvnis',
            'Abduções',
            'Espíritos',
            'Poltergeist',
            'Premonições',
            'Coincidências',
            'Telepatia',
            'Clarividência',
            'Viajantes',
            'Dimensões',
            'Auras',
            'Reencarnação',
            'Mediunidade',
            'Xamanismo',
            'Assombrações',
            'Folclore',
            'Lendas',
            'Maldições',
            'Rituais',
            'Bruxaria',
            'Demonologia',
            'Criptídeos',
            'Portais',
            'Paranormalidade',
            'Telecinese',
            'Profecias',
            'Sonhos',
            'Paralisia',
            'Visões',
            'Psicografia',
            'Vidência',
            'Inexplicáveis',
            'Fenômenos',
            'Mistérios',
        ];

        foreach ($categories as $category) {
            DB::table('categories')->insert([
                'uuid' => Str::uuid(),
                'name' => $category,
                'slug' => Str::slug($category),
                'description' => 'Categoria de ' . $category,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

    }
}
