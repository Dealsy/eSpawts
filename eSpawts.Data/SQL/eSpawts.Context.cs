﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace eSpawts.Data.SQL
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Infrastructure;
    
    public partial class eSpawtsEntities : DbContext
    {
        public eSpawtsEntities()
            : base("name=eSpawtsEntities")
        {
        }
    
        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            throw new UnintentionalCodeFirstException();
        }
    
        public virtual DbSet<Tournament> Tournaments { get; set; }
        public virtual DbSet<Game> Games { get; set; }
        public virtual DbSet<TournamentUser> TournamentUsers { get; set; }
        public virtual DbSet<TournamentFormat> TournamentFormats { get; set; }
        public virtual DbSet<TournamentType> TournamentTypes { get; set; }
        public virtual DbSet<User> Users { get; set; }
    }
}
