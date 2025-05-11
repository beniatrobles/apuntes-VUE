<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('lastname');                             //******** Eremu berri taulan / Nuevo campo en la tabla */
            $table->string('email')->unique();
            //$table->timestamp('email_verified_at')->nullable();   /********* Eremu hau kenduko dugu / Quintamos este campo de la tabla */
            $table->string('password');
          //  $table->rememberToken();                              /********* Eremu hau kenduko dugu / Quintamos este campo de la tabla */
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
