// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using chafaf_back.Data;

namespace chafaf_back.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20211123122138_t1")]
    partial class t1
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "5.0.11");

            modelBuilder.Entity("chafaf_back.models.Depenses", b =>
                {
                    b.Property<int>("DepensesId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Date")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.Property<long>("prix")
                        .HasColumnType("INTEGER");

                    b.Property<string>("type")
                        .HasColumnType("TEXT");

                    b.HasKey("DepensesId");

                    b.HasIndex("UserId");

                    b.ToTable("Depenses");
                });

            modelBuilder.Entity("chafaf_back.models.Dons", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DateToday")
                        .HasColumnType("TEXT");

                    b.Property<string>("MyProperty")
                        .HasColumnType("TEXT");

                    b.Property<long>("Prix")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Type")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("name")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Dons");
                });

            modelBuilder.Entity("chafaf_back.models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<byte[]>("PasswordHash")
                        .HasColumnType("BLOB");

                    b.Property<byte[]>("PasswordSalt")
                        .HasColumnType("BLOB");

                    b.Property<string>("Phone")
                        .HasColumnType("TEXT");

                    b.Property<string>("Roles")
                        .HasColumnType("TEXT");

                    b.Property<string>("Username")
                        .HasColumnType("TEXT");

                    b.HasKey("UserId");

                    b.ToTable("User");
                });

            modelBuilder.Entity("chafaf_back.models.Depenses", b =>
                {
                    b.HasOne("chafaf_back.models.User", "User")
                        .WithMany("Depenses")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("chafaf_back.models.Dons", b =>
                {
                    b.HasOne("chafaf_back.models.User", "User")
                        .WithMany("Dons")
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("chafaf_back.models.User", b =>
                {
                    b.Navigation("Depenses");

                    b.Navigation("Dons");
                });
#pragma warning restore 612, 618
        }
    }
}
